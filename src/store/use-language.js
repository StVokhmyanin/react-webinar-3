import useSelector from "./use-selector";

export default function useLanguage(variants) {

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
