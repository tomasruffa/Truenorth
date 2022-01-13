import axios from 'axios';
import { Alert } from 'react-native';
const baseUrl = 'https://api.coincap.io/v2';

// Invoking get method to perform a GET request
export const getCurrencies = async () => {
    try {
        const response = await axios.get(`${baseUrl}/assets`);
        return response;
    } catch (error) {
        Alert.alert('Something goes wrong please try again');
        throw error
    }
}

export const getCurrencie = async (id: string) => {
    try {
        const response = await axios.get(`${baseUrl}/assets/${id}`);
        return response;
    } catch (error) {
        Alert.alert('Something goes wrong please try again');
        throw error
    }
}