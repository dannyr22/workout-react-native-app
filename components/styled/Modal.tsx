import { FunctionComponent, useState, ReactNode } from "react";
import { Text, View, Modal as DefaultModal, StyleSheet } from "react-native";
import { PressableText } from "./PressableText";

type ModalProps = {
  activator?: FunctionComponent<{ handleOpen: () => void }>;
  children: ReactNode;
};

export function Modal({ activator: Activator, children }: ModalProps) {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  return (
    <View>
      <DefaultModal
        visible={isModalVisible}
        transparent={false}
        animationType="slide"
      >
        <View style={styles.centerView}>
          <View style={styles.contentView}>{children}</View>
          <PressableText
            text="Close"
            onPress={() => setIsModalVisible(false)}
          />
        </View>
      </DefaultModal>
      {Activator ? (
        <Activator
          handleOpen={() => {
            setIsModalVisible(true);
          }}
        />
      ) : (
        <PressableText text="Open" onPress={() => setIsModalVisible(true)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  contentView: {
    marginBottom: 20,
  },
});
