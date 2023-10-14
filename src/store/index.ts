import { createPinia } from "pinia";
import useCounterStore from "./modules/counter";

const pinia = createPinia();

export default pinia;

export { useCounterStore };
