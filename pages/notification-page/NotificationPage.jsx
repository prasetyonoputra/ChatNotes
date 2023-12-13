import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import NotificationItem from "../../components/notification-component/NotificationItem";

function NotificationPage() {
    return (
        <ScrollView style={{ padding: 15 }}>
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
        </ScrollView>
    );
}


export default NotificationPage;