// PageHeading.js

const PageHeading = (props) => {
     return (
          <header>
               {props.children}
               <p>This will appear wherever you see me!</p>
          </header>
     )
}

export default PageHeading;