import React from 'react';
import { ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '@/constants/colors';
import { layoutStyle } from '@/styles/layout';
import { Text } from 'react-native-paper';
import Header from '@/components/header';

export default function PrivacyPolicy() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={layoutStyle.container}>
            <Header 
                title="Política de Privacidade"
            />
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <Text style={{marginBottom: 20}}>Última atualização: 25/06/2024</Text>
                
                <Text style={styles.heading} variant='displaySmall'>Introdução</Text>
                <Text style={styles.paragraph}>
                    WorkerMate está comprometido com a proteção da privacidade de seus usuários. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e compartilhamos suas informações pessoais.
                </Text>
                
                <Text style={styles.heading} variant='displaySmall'>1. Informações que Coletamos</Text>
                <Text style={styles.subheading} variant='headlineMedium'>1.1 Informações Pessoais</Text>
                <Text style={styles.paragraph}>
                    Coletamos informações pessoais que você nos fornece diretamente quando se cadastra em nosso aplicativo, como:
                    {'\n'}- <Text style={styles.bold}>Nome Completo:</Text> Usado para identificar você.
                    {'\n'}- <Text style={styles.bold}>Email:</Text> Usado para login e comunicação.
                    {'\n'}- <Text style={styles.bold}>Senha:</Text> Usada para autenticação e protegida por criptografia.
                </Text>
                
                <Text style={styles.subheading} variant='headlineMedium'>1.2 Informações de Uso</Text>
                <Text style={styles.paragraph}>
                    Coletamos informações sobre como você usa nosso aplicativo, incluindo:
                    {'\n'}- <Text style={styles.bold}>Dados de Log:</Text> Informações como endereço IP, tipo de dispositivo, sistema operacional, páginas visualizadas e tempo de uso.
                    {'\n'}- <Text style={styles.bold}>Cookies e Tecnologias Similares:</Text> Usados para melhorar a experiência do usuário e fornecer funcionalidades personalizadas.
                </Text>
                
                <Text style={styles.heading} variant='displaySmall'>2. Como Usamos Suas Informações</Text>
                <Text style={styles.paragraph}>
                    Usamos as informações que coletamos para:
                    {'\n'}- <Text style={styles.bold}>Fornecer e Melhorar nossos Serviços:</Text> Garantir o funcionamento adequado do aplicativo e melhorar sua funcionalidade.
                    {'\n'}- <Text style={styles.bold}>Comunicação:</Text> Enviar notificações importantes e atualizações sobre nossos serviços.
                    {'\n'}- <Text style={styles.bold}>Segurança:</Text> Proteger nossos usuários e detectar atividades fraudulentas.
                </Text>
                
                <Text style={styles.heading} variant='displaySmall'>3. Compartilhamento de Informações</Text>
                <Text style={styles.paragraph}>
                    Não compartilhamos suas informações pessoais com terceiros, exceto nas seguintes situações:
                    {'\n'}- <Text style={styles.bold}>Com Seu Consentimento:</Text> Com sua permissão explícita.
                    {'\n'}- <Text style={styles.bold}>Para Cumprir Obrigações Legais:</Text> Quando exigido por lei ou em resposta a solicitações legais.
                </Text>
                
                <Text style={styles.heading} variant='displaySmall'>4. Seus Direitos</Text>
                <Text style={styles.paragraph}>
                    Você tem o direito de:
                    {'\n'}- <Text style={styles.bold}>Acessar suas Informações:</Text> Solicitar uma cópia das informações pessoais que temos sobre você.
                    {'\n'}- <Text style={styles.bold}>Corrigir suas Informações:</Text> Atualizar ou corrigir suas informações pessoais.
                    {'\n'}- <Text style={styles.bold}>Excluir suas Informações:</Text> Solicitar a exclusão de suas informações pessoais.
                    {'\n'}Para exercer esses direitos, entre em contato conosco em middlewaredev@hotmail.com.
                </Text>
                
                <Text style={styles.heading} variant='displaySmall'>5. Segurança das Informações</Text>
                <Text style={styles.paragraph}>
                    Implementamos medidas de segurança adequadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
                </Text>
                
                <Text style={styles.heading} variant='displaySmall'>6. Retenção de Dados</Text>
                <Text style={styles.paragraph}>
                    Reteremos suas informações pessoais pelo tempo necessário para cumprir os propósitos descritos nesta política, a menos que um período de retenção mais longo seja exigido ou permitido por lei.
                </Text>
                
                <Text style={styles.heading} variant='displaySmall'>7. Alterações nesta Política de Privacidade</Text>
                <Text style={styles.paragraph}>
                    Podemos atualizar nossa Política de Privacidade periodicamente. Notificaremos você sobre quaisquer mudanças, publicando a nova política nesta página e atualizando a data de "Última atualização".
                </Text>
                
                <Text style={styles.heading} variant='displaySmall'>8. Contato</Text>
                <Text style={styles.paragraph}>
                    Se você tiver alguma dúvida ou preocupação sobre esta Política de Privacidade, entre em contato conosco em:
                    {'\n'}- <Text style={styles.bold}>Email:</Text> middlewaredev@hotmail.com
                </Text>
                
                <Text style={styles.paragraph}>
                    Agradecemos por confiar no WorkerMate para proteger suas informações pessoais.
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    scrollViewContent: {
        paddingHorizontal: 20,
    },
    title: {
        marginBottom: 20,
    },
    date: {
        marginBottom: 20,
    },
    heading: {
        marginTop: 20,
        marginBottom: 10,
    },
    subheading: {
        marginTop: 10,
        marginBottom: 5,
    },
    paragraph: {
        marginBottom: 10,
        lineHeight: 24,
    },
    bold: {
        fontWeight: 'bold',
    },
    closeButton: {
        padding: 10,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    closeButtonText: {
        fontSize: 16,
        color: '#FFFFFF',
    },
});
