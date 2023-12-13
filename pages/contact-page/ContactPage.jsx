import React from "react";
import { ScrollView } from "react-native";
import ContactItem from "../../components/contact-component/ContactItem";

function ContactPage() {
    return (
        <ScrollView style={{ padding: 15 }}>
            <ContactItem />
            <ContactItem />
            <ContactItem />
            <ContactItem />
            <ContactItem />
            <ContactItem />
            <ContactItem />
            <ContactItem />
            <ContactItem />
        </ScrollView>
    );
}


export default ContactPage;