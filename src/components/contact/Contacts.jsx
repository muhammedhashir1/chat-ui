import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import styles from "./Contacts.module.css";
import { BiCheckDouble } from "react-icons/bi";
import ChatName from "../chat-name/ChatName";

const Contacts = () => {
  const [selectedContactIndex, setSelectedContactIndex] = useState(null);
  const [selectedContactName, setSelectedContactName] = useState("");
  const contactDatas = [
    {
      profile: <CgProfile />,
      contactName: "+971432156152",
      chat: "We’ve informed our team, ffs knasdfa. Let us know more about it.",
      day: "Monday",
      unread: 0,
    },
    {
      profile: <CgProfile />,
      contactName: "Salton Moriss",
      chat: "We’ve a query on asdakfnsdjnd, ffs knasdfa. Let us know more about it.",
      day: "Monday",
      unread: 2,
    },
    {
      profile: <CgProfile />,
      contactName: "+971432154824",
      chat: "We’ve informed our team, ffs knasdfa. Let us know more about it.",
      day: "Monday",
      unread: 0,
    },
    {
      profile: <CgProfile />,
      contactName: "+971432152452",
      chat: "We’ve informed our team, ffs knasdfa. Let us know more about it.",
      day: "sunday",
      unread: 0,
    },
    {
      profile: <CgProfile />,
      contactName: "+971436556152",
      chat: "We’ve informed our team, ffs knasdfa. Let us know more about it.",
      day: "sunday",
      unread: 0,
    },
    {
      profile: <CgProfile />,
      contactName: "+971432156188",
      chat: "We’ve informed our team, ffs knasdfa. Let us know more about it.",
      day: "sunday",
      unread: 0,
    },
    {
      profile: <CgProfile />,
      contactName: "+971432156144",
      chat: "We’ve informed our team, ffs knasdfa. Let us know more about it.",
      day: "sunday",
      unread: 0,
    },
    {
      profile: <CgProfile />,
      contactName: "+971432156354",
      chat: "We’ve informed our team, ffs knasdfa. Let us know more about it.",
      day: "sunday",
      unread: 0,
    },
    {
      profile: <CgProfile />,
      contactName: "+971432156657",
      chat: "We’ve informed our team, ffs knasdfa. Let us know more about it.",
      day: "sunday",
      unread: 0,
    },
    {
      profile: <CgProfile />,
      contactName: "+971432156343",
      chat: "We’ve informed our team, ffs knasdfa. Let us know more about it.",
      day: "sunday",
      unread: 0,
    },
    {
      profile: <CgProfile />,
      contactName: "+971432156567",
      chat: "We’ve informed our team, ffs knasdfa. Let us know more about it.",
      day: "sunday",
      unread: 0,
    },
  ];

  const handleContactClick = (index, name) => {
    setSelectedContactIndex(index);
    setSelectedContactName(name);
  };

  return (
    <>
      <ChatName name={selectedContactName} />
      <div className={styles.contactMain}>
        {contactDatas.map((contact, index) => (
          <div
            key={index}
            className={styles.contactCard}
            onClick={() => handleContactClick(index, contact.contactName)}
            style={{
              backgroundColor: selectedContactIndex === index ? "#eceaea" : "#f9f9f9",
            }}
          >
            <div className={styles.chatLeft}>
              <div className={styles.contactProfileDiv}>{contact.profile}</div>
              <div className={styles.chatDetails}>
                <div className={styles.contactName}>{contact.contactName}</div>
                <div className={styles.contactMsgs}>
                  <BiCheckDouble color="blue" />
                  {contact.chat}
                </div>
              </div>
            </div>
            <div className={styles.chatDateMain}>
              <div className={styles.chatDate}>{contact.day}</div>

              {contact.unread > 0 && <div className={styles.chatRead}>{contact.unread}</div>}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Contacts;
