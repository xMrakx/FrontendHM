import styles from "./CurrencyDescriptionRow.module.scss"

interface CurrencyDescriptionRowProps {
    name: string;
    code: string;
    symbol: string;
    description: string;
}

function CurrencyDescriptionRow({ name, code, symbol, description }: CurrencyDescriptionRowProps) {
    return (
        <div className={styles.container}>
            <p className={styles.header}>{name} - {code} - {symbol}</p>
            <p className={styles.description}>{description}</p>
        </div>
    )
}

export default CurrencyDescriptionRow;