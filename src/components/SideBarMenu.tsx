import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import { IconButton, Menu } from "react-native-paper";
import { FontSize, rsFontModerate, rsWidth } from "../theme/responsive";

type EventMenuProps = {
  onSave?: () => void;
  onShare?: () => void;
  onDelete?: () => void;
};

const SideBarMenu: React.FC<EventMenuProps> = ({ onSave, onShare, onDelete }) => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <Menu
      visible={visible}
      onDismiss={closeMenu}
      anchor={
        <IconButton
          icon="dots-vertical"
          iconColor="white"
          size={rsFontModerate(24)}
          onPress={openMenu}
        />
      }
      contentStyle={styles.menuContainer}
    >
      <Menu.Item onPress={() => { closeMenu(); onSave?.(); }} title="Save Event" titleStyle={styles.menuText} />
      <Menu.Item onPress={() => { closeMenu(); onShare?.(); }} title="Share" titleStyle={styles.menuText} />
      <Menu.Item onPress={() => { closeMenu(); onDelete?.(); }} title="Delete" titleStyle={[styles.menuText, { color: "red" }]} />
    </Menu>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    backgroundColor: "#0C130E",
    borderRadius: 8,
  },
  menuText: {
    fontSize: FontSize.small,
    color: "white",
  },
});

export default SideBarMenu;
