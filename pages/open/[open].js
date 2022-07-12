import React from "react";

export default function open() {
  const data = {
      _id: "62c3292e87f771f236d1edf1",
      title: "new blog ",
      programmingLanguage: "JavaScript",
      description:
        'Direction \nSet the direction of flex items in a flex container with direction utilities. In most cases you can omit the horizontal class here as the browser default is row. However, you may encounter situations where you needed to explicitly set this value (like responsive layouts).\n\nUse .flex-row to set a horizontal direction (the browser default), or .flex-row-reverse to start the horizontal direction from the opposite side.\n\n\nSince the above is such a common configuration react-bootstrap provides the <DropdownButton> component to help reduce typing. Provide a title prop and some <DropdownItem>s and you\'re ready to go.\n\nimport Dropdown from \'react-bootstrap/Dropdown\';\nimport DropdownButton from \'react-bootstrap/DropdownButton\';\n\nfunction ButtonDarkExample() {\n  return (\n    <>\n      <Dropdown>\n        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">\n          Dropdown Button\n        </Dropdown.Toggle>\n\n        <Dropdown.Menu variant="dark">\n          <Dropdown.Item href="#/action-1" active>\n            Action\n          </Dropdown.Item>\n          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>\n          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>\n          <Dropdown.Divider />\n          <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>\n        </Dropdown.Menu>\n      </Dropdown>\n\n      <DropdownButton\n        id="dropdown-button-dark-example2"\n        variant="secondary"\n        menuVariant="dark"\n        title="Dropdown button"\n        className="mt-2"\n      >\n        <Dropdown.Item href="#/action-1" active>\n          Action\n        </Dropdown.Item>\n        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>\n        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>\n        <Dropdown.Divider />\n        <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>\n      </DropdownButton>\n    </>\n  );\n}\n\nexport default ButtonDarkExample;',
      hashtags: [
        "fjsaf ",
        " fas",
        "fjfj' fs",
        " ff",
        " fa",
        " f",
        "af s",
        "faj",
        "f ",
        "f a",
        " d'f\nf sf's'",
        " faslf' ",
      ],
      authorName: "akshay sharma",
      likes: [],
      blogerid: "62c2af39d4bf4880248296eb",
      aproved: true,
      comments: [],
      date: "2022-07-04T17:53:50.395Z",
      __v: 0,
    }
    const description=data?.description.split('\n')
  return (
    <div className="bg-white m-3  border border-3 border-secondary p-3 rounded-3 mt-4">
      <h2>{data?.title}</h2>
    {description.map((e)=><p>{e}</p>)} 
    </div>
  );
}
