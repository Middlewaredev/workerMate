export const validateNome = (name: string) => {
    name = name.trim();

    const re = /^[A-Za-z]+(?:\s[A-Za-z]+)+$/;
    const error = re.test(name)

    if(error){
        return ''
    } else {
        return 'Nome inválido, precisa de nome e sobrenome'
    }
};

export const validateCpf = (cpf: string) => {
    let cpfClean = cpf.replace(/[^\d]+/g, '');
    if (cpfClean.length !== 11 || /^(\d)\1+$/.test(cpfClean)) {
        return 'CPF inválido'
    }

    let sum = 0;
    let remainder;

    for (let i = 1; i <= 9; i++) sum += parseInt(cpfClean.substring(i - 1, i)) * (11 - i);
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpfClean.substring(9, 10))) {
        return 'CPF inválido'
    }

    sum = 0;
    for (let i = 1; i <= 10; i++) sum += parseInt(cpfClean.substring(i - 1, i)) * (12 - i);
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpfClean.substring(10, 11))) {
        return 'CPF inválido'
    }
    
    return ''
};

export const validateCnpj = (cnpj: string) => {
    let cnpjClean = cnpj.replace(/[^\d]+/g, '');

    if (cnpjClean.length !== 14) {
        return 'CNPJ inválido';
    }

    // Verifica se todos os dígitos são iguais
    if (/^(\d)\1+$/.test(cnpjClean)) {
        return 'CNPJ inválido';
    }

    let length = cnpjClean.length - 2;
    let numbers = cnpjClean.substring(0, length);
    let digits = cnpjClean.substring(length);
    let sum = 0;
    let pos = length - 7;
    for (let i = length; i >= 1; i--) {
        sum += numbers.charAt(length - i) * pos--;
        if (pos < 2) pos = 9;
    }
    let result = sum % 11 < 2 ? 0 : 11 - sum % 11;
    if (result != digits.charAt(0)) {
        return 'CNPJ inválido';
    }

    length = length + 1;
    numbers = cnpjClean.substring(0, length);
    sum = 0;
    pos = length - 7;
    for (let i = length; i >= 1; i--) {
        sum += numbers.charAt(length - i) * pos--;
        if (pos < 2) pos = 9;
    }
    result = sum % 11 < 2 ? 0 : 11 - sum % 11;
    if (result != digits.charAt(1)) {
        return 'CNPJ inválido';
    }

    return '';
};

export const validateSocialReason = (socialReason: string) => {
    const re = /^[A-Za-z0-9\s.,'-]+$/;
    if (re.test(socialReason) && socialReason.length > 0) {
        return '';
    } else {
        return 'Razão Social inválida';
    }
};

export const validateEmail = (email: string) => {
    // Expressão regular para validar o formato do email
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (re.test(email)) {
        return '';
    } else {
        return 'Email inválido';
    }
};

export const validatePhone = (phone: string) => {
    const re = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
    if (re.test(phone)) {
        return '';
    } else {
        return 'Telefone inválido';
    }
};

export const validatePhoneEmpty = (phone: string) => {
    const re = /^$|^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
    if (re.test(phone)) {
        return '';
    } else {
        return 'Telefone inválido';
    }
};

export const validateCep = (cep: string) => {
    // Expressão regular para validar CEP brasileiro
    const re = /^\d{5}-?\d{3}$/;
    if (re.test(cep)) {
        return '';
    } else {
        return 'CEP inválido';
    }
};

export const validateAddress = (address: string) => {
    if (address.trim().length === 0) {
        return 'O campo de logradouro não pode estar vazio';
    }

    if (address.length < 3) {
        return 'O logradouro deve conter pelo menos 3 caracteres';
    }

    const re = /^[A-Za-z0-9\s.,\-]+$/;
    if (!re.test(address)) {
        return 'O logradouro contém caracteres inválidos';
    }

    return '';
};

export const validateNumber = (number: string) => {
    if (number.trim().length === 0) {
        return 'O campo de número não pode estar vazio';
    }

    if (!/^\d+[A-Za-z]?$/.test(number)) {
        return 'O número do endereço deve conter apenas dígitos numéricos e no máximo uma letra';
    }

    return '';
};

export const validateComplement = (complement: string) => {
    complement = complement.trim();

    const re = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9\s]+$/;
    const isValid = re.test(complement);

    if (isValid || complement === '') {
        return ''; 
    } else {
        return 'Complemento inválido'; 
    }
};

export const validateNeighborhood = (neighborhood: string) => {
    neighborhood = neighborhood.trim();

    if (neighborhood === '') {
        return 'Bairro é obrigatório';
    } else {
        const re = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
        const isValid = re.test(neighborhood);

        if (isValid) {
            return '';
        } else {
            return 'Bairro inválido';
        }
    }
};

export const validateCity = (city: string) => {
    city = city.trim();

    if (city === '') {
        return 'Cidade é obrigatória';
    } else {
        const re = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
        const isValid = re.test(city);

        if (isValid) {
            return '';
        } else {
            return 'Cidade inválida';
        }
    }
};

export const validateState = (state: string) => {
    // Remove leading and trailing white spaces
    state = state.trim();

    // Check if state is empty
    if (state === '') {
        return 'Estado é obrigatório'; // Return error message if state is empty
    } else {
        // Check if state contains only letters, spaces, and accents
        const re = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/; // Accepts letters, spaces, and accents
        const isValid = re.test(state);

        if (isValid) {
            return ''; // Return empty if state is valid
        } else {
            return 'Estado inválido'; // Return error message if state contains invalid characters
        }
    }
};

export const validatePassword = (password: string) => {
    if (!password) {
        return 'Senha é obrigatória';
    }

    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!re.test(password)) {
        return 'A senha deve ter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais';
    }

    return '';
};
