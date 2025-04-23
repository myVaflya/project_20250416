import styles from './Checkbox.module.css';
import classNames from 'classnames';

const CheckboxIcon = () => {
    return (
        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.448 9.8478L8.63914 11.9951L13.3501 6.62683" stroke="white" strokeWidth="1.5338" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const Checkbox = ({ label, checked, disabled = false, error = false }) => {
    return (
        <div className={styles.wrapper}>
            <div className={classNames({
                [styles.checkbox]: true,
                [styles.activeBorder]: checked,
                [styles.checked]: checked,
                [styles.disabled]: disabled,
                [styles.error]: error,
            })}>{checked && <CheckboxIcon />}</div>
            {label && <div>{label}</div>}
        </div>
    )
};