import styles from "./SwapButton.module.scss"

interface SwapButtonProps {
    onSwap: () => void;
}

function SwapButton({ onSwap }: SwapButtonProps) {
    return (
        <div className={styles.swapButtonContainer}>
            <button
                className={styles.swapButton}
                onClick={onSwap}>
                Swap
            </button>
        </div>
    );
}

export default SwapButton;