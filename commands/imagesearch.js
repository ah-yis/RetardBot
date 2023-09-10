const Scraper = require('images-scraper');
const google = new Scraper({
    puppeteer: {
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
});

module.exports = {
    name: 'imagesearch',
    description: 'Searches for images on Google Images.',
    async execute(message, args) {
        console.log(args);

        const imageQuery = args.join(' ');
        if (!imageQuery) return message.channel.send('You have to enter an image name first.');

        const filter = (response) => {
            return response.author.id === message.author.id;
        };

        try {
            await message.channel.send('Do you want the search to be headless? Reply with `yes` or `no`.');
            const collected = await message.channel.awaitMessages(filter, { max: 1, time: 10000, errors: ['time'] });
            const headlessResponse = collected.first().content.toLowerCase();

            const headless = headlessResponse === 'yes';
            google.puppeteerOptions.headless = headless;

            const imageResults = await google.scrape(imageQuery, 3);
            if (imageResults.length === 0) {
                return message.channel.send('No images found.');
            }

            const imageLinks = imageResults.map(result => result.url).join('\n');
            const response = `Image search results for "${imageQuery}":\n\n${imageLinks}`;
            message.channel.send(response);
        } catch (error) {
            console.error('Error occurred during image search:', error);
            message.channel.send('An error occurred during the image search.');
        }
    }
};
