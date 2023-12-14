import React from "react";
import { ScrollView } from "react-native";
import NoteItem from "../../components/note-component/NoteItem";

function NotePage(params) {
    return (
        <ScrollView>
            <NoteItem />
        </ScrollView>
    );
}

export default NotePage;