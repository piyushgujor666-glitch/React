function customeRender(reactelement, container) {
    const domElement = document.createElement(reactelement.type)
    domElement.innerHTML = reactelement.children
    for (const prop in reactelement.props) {
        domElement.setAttribute(prop, reactelement.props[prop])
    }
    container.appendChild(domElement)
    // const element = document.createElement(reactelement.type)
    // element.innerHTML = reactelement.children
    // element.setAttribute("href", reactelement.props.href)
    // element.setAttribute("target", reactelement.props.target)
    // container.appendChild(element)
}
const reactelement = {
    type: "a",
    props: {
        href: "https://www.google.com",
        target: "_blank"
    },
    children: 'click me to go to google'
}

const maincontainer = document.querySelector("#root")

customeRender(reactelement, maincontainer)