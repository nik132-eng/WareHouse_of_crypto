import { useCoin } from "../../Context/CoinContext";
import styles from "./Header.module.css";
import { VscGithubAlt } from "react-icons/vsc";

const Header = () => {
	const { searchInput, setSearchInput, setCurrency } = useCoin();

	const handleChange = (event) => {
		setSearchInput(event.target.value);
	};

	return (
		<>
			<main className={styles.container}>
				<nav>
					
					{/* CURRENCY SELECTION */}
					<select
						className={styles.currency}
						name="currency"
						onChange={(e) => setCurrency(e.target.value)}
					>
						<option value="INR">INR</option>
						<option value="USD">USD</option>
						<option value="EUR">EUR</option>
					</select>
				</nav>

				<h1 className={styles.container__title}>WareHouse of Crypto </h1>
			</main>
		</>
	);
};

export default Header;
