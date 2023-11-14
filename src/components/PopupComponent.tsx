import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PopupComponent = ({ message, onClose }: { message: string; onClose: () => void }) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
          <Text style={styles.messageText}>{message}</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 50, // Ajuste para posicionar mais acima
  },
  messageText: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 0,
    right: 5,
    backgroundColor: 'transparent', // Fundo transparente
    padding: 10,
    borderRadius: 5,
    zIndex: 1, // Definir zIndex para garantir que o botão esteja acima do conteúdo
  },
  closeButtonText: {
    color: 'black', // Cor do texto do botão
    fontSize: 16,
  },
});

export default PopupComponent;
