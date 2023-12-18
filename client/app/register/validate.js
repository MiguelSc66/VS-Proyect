import { useRouter } from "next/router"


const validate = (input) => {
    const errors = {}

    if(!input.name) {
        errors.name = 'Name is required'
    } else if (input.name.length >= 35){
    errors.name = "Limite superado"
    }

    if (input.age < 18) {
        errors.age = 'Debe ser mayor de edad'
    }

    if (!isValidEmail(input.email)) {
        errors.email = 'Correo electrónico no válido'
    }

    if (input.dni.length < 8 ) {
        errors.dni = 'DNI es incorrecto'
    }

    if (input.password.length < 8) {
        errors.password = 'La contraseña debe tener al menos 8 caracteres'
    }

    if (input.phoneNumber.length < 6) {
        errors.phoneNumber = 'El teléfono es invalido'
    }
    return errors
}

const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const redirect = () => {
    const router = useRouter()
    router.push("/")
}


export default validate