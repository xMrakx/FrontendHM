import { useState } from "react";
import CurrencyDescriptionRow from "./CurrencyDescriptionRow";
import styles from "./MoreAboutWidget.module.scss";

interface MoreAboutWidgetProps {
    fromCode: string;
    toCode: string;
}

function MoreAboutWidget({ fromCode, toCode }: MoreAboutWidgetProps) {
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
                        name="Polish zloty"
                        code="PLN"
                        symbol="zł"
                        description="This is the official currency and legal tender of Poland.
                            It is subdivided into 100 groszy (gr). It is the most-traded currency
                            in Central and Eastern Europe and ranks 20th most-traded in the foreign exchange market."
                    />
                    <CurrencyDescriptionRow
                        name="Japanese yen"
                        code="JPY"
                        symbol="¥"
                        description="The yen is the official currency of Japan. It is the third-most 
                            traded currency in the foreign exchange market, after the United States dollar
                            (USD) and the euro.[2] It is also widely used as a third reserve currency after the USD and the euro."
                    />

                </div>
            )}

        </div>
    )
}

export default MoreAboutWidget;