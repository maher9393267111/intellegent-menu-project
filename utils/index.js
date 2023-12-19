
export const smoothScrollIntoSection = (event, sectionId) => {
    event.preventDefault();
    // scroll into view with offset 100px
    const element = document.getElementById(sectionId);
    if (!element) return;
    const offset = 100;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element?.getBoundingClientRect().top;
    const elementPosition = elementRect ? elementRect - bodyRect : 0;
    const offsetPosition = elementPosition - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }