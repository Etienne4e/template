import '../styles/styles.css'
import 'lazysizes'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'
/*import MobileMenu from './modules/MobileMenu'*/

/*new MobileMenu();*/
new StickyHeader()
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
new RevealOnScroll(document.querySelectorAll(".nav-item"), 60)
let modal

document.querySelectorAll(".open-modal").forEach(el => {
    el.addEventListener("click", e => {
        //e.preventDefault()
        if (typeof modal == "undefined") {
            import(/* webpackChunkName: "modal" */ './modules/Modal').then(x => {
                modal = new x.default()
                setTimeout(() => modal.openTheModal(), 20)
            }).catch(() => console.log("There was a problem. Please reload the browser."))
        } else {
            modal.openTheModal()
        }
    })
})

if (module.hot) {
    module.hot.accept()
}