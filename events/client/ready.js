module.exports = (client) => {
    const statusList = ["nothing!", "your mom", "epic gaming games", "Sonic CD", "Ultra rich billionare rich money simulator",
        "Who Asked Tycoon", "nothing, get lost.", "Sonic the Hedghehog (2006)", "Playing Playing Playing Playing Playing", "MineCrap",
        "Deltarune", "Minecraft", "Spotify", "Breaking Bad Tycoon on Roblox", "Sonic Mania", "your dad",
        "Half Life - Source", "Desert Bus for the Sega CD", "Sonic's Schoolhouse", "Sonic Generations", "joe nuts",
        "with your balls :troll:", "RPCS3", "Cemu", "with me balls","The Simpsons: Hit and Run","The Simpsons Game on PlayStation 3"];

    let readyEventHandled = false;

    function setRandomActivity() {
        const randomMess = statusList[Math.floor(Math.random() * statusList.length)];
        client.user.setActivity(randomMess);
        console.log(`Activity changed to "${randomMess}"`);
    }

    if (client && client.on) {
        client.on('ready', () => {
            if (!readyEventHandled) {
                readyEventHandled = true;
                console.log('Retardbot is now Online!');

                // Set initial activity
                setRandomActivity();

                // Change activity every 10 minutes
                setInterval(setRandomActivity, 10 * 60 * 1000);
            }
        });
    }
};
