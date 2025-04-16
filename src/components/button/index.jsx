import { background } from "storybook/internal/theming";

export const Button = ({ label, variant, onClick }) => {

    const commonStyles = {
        padding: '20px 32px 20px 32px',
        borderRadius: '4px', 
        fontFamily: 'Tektur, sans-serif'
    }



    let customStyles = {};
    if (variant === 'primary') {
        customStyles = {
            background: '#605DEC',
            border: '1px solid #605DEC',
            color: '#FFFFFF'
        }
    } else if (variant === 'secondary') {
        customStyles = {
            background: 'transparent',
            border: '1px solid #605DEC',
            color: '#605DEC'
        }
    } else if (variant === 'tertiary') {
        customStyles = {
            background: 'transparent',
            border: '1px solid transparent',
            color: '#605DEC'
        }
    }

    return (
        <button style={{ ...commonStyles, ...customStyles }} onClick={onClick}>
            {label}
        </button>
    )
}