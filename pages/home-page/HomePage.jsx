import React, { useState } from "react";
import { ScrollView, Text, View, StyleSheet, Alert } from "react-native";
import BottomBarComponent from "../../components/bottom-bar/BottomBarComponent";
import SearchNoteComponent from "../../components/search-notes/SearchNoteComponent";
import SidebarComponent from "../../components/sidebar-component/SidebarComponent";
import NotificationPage from "../notification-page/NotificationPage";

function HomePage({ setNavigate }) {
    const [openSidebar, setOpenSidebar] = useState(false);
    const [content, setMainContent] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <SearchNoteComponent />
            </View>

            <ScrollView style={styles.main}>
                {content == "notification" && <NotificationPage setNavigate={setNavigate}/>}
            </ScrollView>

            <View style={styles.bottomBar}>
                <BottomBarComponent setOpenSidebar={setOpenSidebar} openSidebar={openSidebar} setMainContent={setMainContent}/>
            </View>

            {openSidebar && <SidebarComponent setOpenSidebar={setOpenSidebar} openSidebar={openSidebar} setNavigate={setNavigate} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchBar: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
    },
    bottomBar: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
    },
    main: {
        position: "absolute",
        top: 60,
        left: 0,
        right: 0,
        height: "87%"
    },
});

export default HomePage;
