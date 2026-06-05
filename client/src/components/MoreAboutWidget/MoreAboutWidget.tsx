import { useState } from "react";
import CurrencyDescriptionRow from "./CurrencyDescriptionRow";
import styles from "./MoreAboutWidget.module.scss";

export interface MoreAboutWidgetProps {
    fromCode: string;
    fromName: string;
    fromSymbol: string;
    fromDescription: string;
    toName: string;
    toCode: string;
    toSymbol: string;
    toDescription: string;
}

function MoreAboutWidget({ fromCode, fromName, fromSymbol, fromDescription, toCode, toName, toSymbol, toDescription }: MoreAboutWidgetProps) {
    const [isVisible, setIsVisible] = useState(true);

    const ChangeVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <div className={styles.btnCon}>
                <hr className={styles.line} />
                <button className={styles.button} onClick={ChangeVisibility}>
                    {fromCode}/{toCode}: about {isVisible ? <div className={styles.arrowUp} /> : <div className={styles.arrowDown} />}
                </button>
            </div>
            {isVisible && (
                <div>
                    <CurrencyDescriptionRow
                        name={fromName}
                        code={fromCode}
                        symbol={fromSymbol}
                        description={fromDescription}
                    />
                    <CurrencyDescriptionRow
                        name={toName}
                        code={toCode}
                        symbol={toSymbol}
                        description={toDescription}
                    />

                </div>
            )}

        </div>
    )
}

export default MoreAboutWidget;