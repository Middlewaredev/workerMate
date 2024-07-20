import PageHeader from "@/components/pageHeader";
import colors from "@/constants/colors";
import { Tabs } from "expo-router";
import { Icon } from "react-native-paper";

export const defaultTabBarStyle = {
    backgroundColor: colors.background,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: colors.border,
    minHeight: 74,
}

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.accent,
                tabBarInactiveTintColor: colors.primary,
                tabBarStyle: defaultTabBarStyle,
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
            <Tabs.Screen
                name="clients"
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Icon
                            source="account-outline"
                            color={color}
                            size={size}
                        />
                    ),
                    title: "Clientes",
                    headerShown: true,
                    header: () => <PageHeader title="Clientes"/>,
                    href: {
                        pathname: "clients",
                        params: {
                            origin: 'home'
                        }
                    }
                }}
                initialParams={{origin: 'home'}}
            />
            <Tabs.Screen
                name="finances"
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Icon
                            source="currency-usd"
                            color={color}
                            size={size}
                        />
                    ),
                    title: "Financeiro",
                    headerShown: true,
                    header: () => <PageHeader title="Financeiro"/>
                }}
            />
            <Tabs.Screen 
                name="(stack)"
                options={{
                    href: null,
                    tabBarStyle: {
                        display: 'none'
                    }
                }}
            />
        </Tabs>
    );
}