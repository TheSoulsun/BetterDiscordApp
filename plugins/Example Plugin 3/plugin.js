module.exports = (Plugin, BD, Vendor) => {

    const { Api, Events, Storage } = BD;
    const { $, React } = Vendor;
    
    class V2Plugin extends Plugin {

        constructor(props) {
            super(props);
        }

        onStart() {
            //Called when plugin is started, including after reload if enabled.
            Api.log('on start 3');

            //Let's add a simple event listener.
            Events.on('new-message', this.newMessageHandler);

            //Return true if plugin started correctly
            return true;
        }

        onStop() {
            //Called when plugin is stopped, including before reload if enabled.
            Api.log('on stop 3');

            //Remove our listener
            Events.off('new-message', this.newMessageHandler);

            //Return true if plugin stopped correctly
            return true;
        }

        onSave() {
            //Called when plugin settings are saved
        }


        //Simply by having this getter your plugin will override the default settings panel
        //You must return a react component
        //get settingsPanel() {}

        newMessageHandler(channel, server, message) {
            //Print some message data in console
           // Api.log(`New Message from: ${message.author.username} in ${server.name}#${channel.name}: ${message.content}`);
        }

    }

    return V2Plugin;
};