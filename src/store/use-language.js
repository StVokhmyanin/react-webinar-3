import useSelector from "./use-selector";
import useStore from "./use-store";

export default function useLanguage(variants) {

  const store = useStore();
  const select = useSelector(state => ({
    language: state.language.language
  }));

  let text = '';
  variants.filter((variant) => {
    if (variant.language === select.language) {
      text = variant.text;
    }
  });

  return text;
}
