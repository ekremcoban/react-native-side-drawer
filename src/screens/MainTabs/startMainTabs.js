import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";

const startTabs = () => {
    Promise.all([
        Icon.getImageSource("add-map", 30),
        Icon.getImageSource("ios-share-alt", 30),
        Icon.getImageSource("ios-menu", 30)
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "navigation.FindPlaceScreen",
                    label: "Find Place Label",
                    title: "Find Place Title",
                    icon: sources[0],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[2],
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
                },
                {
                    screen: "navigation.SharePlaceScreen",
                    label: "Share Place Label",
                    title: "Share Place Title",
                    icon: sources[1],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[2],
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
                }
            ],
            drawer: {
                left: {
                    screen: "navigation.SideDrawer"
                }
            }
        });
    })
}

export default startTabs;