import PageHeader from "@/components/pageHeader";
import colors from "@/constants/colors";
import { Tabs } from "expo-router";
import { Icon, Title } from "react-native-paper";


export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.accent,
                tabBarInactiveTintColor: colors.primary,
                tabBarStyle: {
                    backgroundColor: colors.background,
                    borderWidth: 1,
                    borderBottomWidth: 0,
                    borderColor: colors.border,
                    minHeight: 74
                },
                tabBarItemStyle: {
                    paddingBottom: 15,
                    paddingTop: 15
                },
                
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Icon
                            source="home-outline"
                            color={color}
                            size={size}
                        />
                    ),
                    title: "Inicio",
                    headerShown: true,
                    header: () => <PageHeader title="WokerMate"/>
                }}
            />
        </Tabs>
    );
}