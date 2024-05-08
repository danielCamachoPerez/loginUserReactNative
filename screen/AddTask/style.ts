import { Text, TextInput, View } from 'react-native';
import styled from 'styled-components/native';

export const ViewContainer = styled(View)`
    flex: 1;
    background-color: #fff;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
`;

export const TextField = styled(TextInput)`
    height: 40px;
    margin: 12px;
    border-width: 1px;
    padding: 10px;
    width: 100%;
`;

export const TextTitle = styled(Text)`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
    width: 100%;
    color: #000;
`;
