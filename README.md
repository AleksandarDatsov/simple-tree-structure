<!-- PROJECT LOGO
<br />
<p align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>
 -->
  <h3 align="center">Simple Tree Structure /STS/</h3>

  <p align="center">
    STS is a lightweight library for presenting data tree structures with basic functionalities that is compatible even with IE /tested with v11/
    <br />
    <!--<a href="https://github.com/github_username/repo_name"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/github_username/repo_name">View Demo</a>
    ·
    <a href="https://github.com/github_username/repo_name/issues">Report Bug</a>
    ·
    <a href="https://github.com/github_username/repo_name/issues">Request Feature</a>-->
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <!-- <li><a href="#prerequisites">Prerequisites</a></li> -->
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <!-- <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>-->
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project
First of all i wanna say that this readme file will be updated as soon as I can.
<br/>

STS library allows you to present fast data tree structures with basic functionalities. It is easy to use and stylize.

### Built With

* JavaScript
* TypeScript


<!-- GETTING STARTED -->
## Getting Started
<!-- 
To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm i simple-tree-structure@latest -g
  ```
-->
### Installation
<!-- 1. Clone the repo
   ```sh
   git clone https://github.com/AleksandarDatsov/simple-tree-structure.git
   ``` -->

1. Install NPM packages
   ```javascript
    npm i simple-tree-structure@latest -g
   ```

<!-- USAGE EXAMPLES -->
## Usage

As i said earlier STS is easy to use. If you are going to use this library in React/Angular/VueJs project you just need to import it like this in your file:

```javascript
import { buildTree, getSelectedChildElements } from 'simple-tree-structure/src/simple-tree-structure';
```

buildTree() accepts 6 parameters:
1. treeModel - the data we are going to populate our tree with.
Here is a sample of how the json model must look like:

```javascript
{
   "treeModel":[
      {
         "id":1,
         "parentId":0,
         "description":"___1___ Parent",
         "children":[
            {
               "id":2,
               "parentId":1,
               "description":"___1___ Firstborn Child",
               "children":[
                  {
                     "id":3,
                     "parentId":2,
                     "description":"___1___ Firstborn Grand Child",
                     "children":[
                        {
                           "id":4,
                           "parentId":3,
                           "description":"___1___ Firstborn Grand Grand Child",
                           "children":[]
                        },
                        {
                           "id":5,
                           "parentId":3,
                           "description":"___1___ Second-born Grand Grand Child",
                           "children":[]
                        }
                     ]
                  }
               ]
            },
            {
               "id":6,
               "parentId":2,
               "description":"___1___ Second-born Child",
               "children":[]
            }
         ]
      },
      {
         "id":7,
         "parentId":0,
         "description":"___2___ Parent with one child",
         "children":[
            {
               "id":9,
               "parentId":7,
               "description":"___2___ Firstborn Child",
               "children":[]
            }
         ]
      }
   ]
}
```



2. rootElementId - this is the id of the html element that is going to 'hold' our STS. In other words this is where we are going to 'paint' it.

3. isDefaultView - defines whether our STS will be displayed exanded or not.

4. isParentDescBold - defines whether the description if the element that has children will be displayed as bold.

5. descriptionSpanClass - this allows you to add your own style to the span element that represents the description part in our STS element.

6. checkboxClass - this allows you to add your own style to checkbox element.


After we learned this we prepare the container for our STS. In this case the ul element with id='treeRoot' will be our container.

		<h2>Simple Tree Structure</h2>
        <ul id='treeRoot'></ul>
		
The last step is to call buildTree(treeModel, rootElementId, isDefaultView, isParentDescBold, descriptionSpanClass, checkboxClass) with your parameters.

	buildTree(treeModel, 'treeRoot', true, true, someStyle, someStyle);


And finally if we want to get the selected elements in our STS we can just call 

    getSelectedChildElements()

and thats all. This function returns the id and description of every selected elements.

STS with isDefaultView parameter set to 'true':
<img src="\simple-tree-structure\imgSamples\sts_default_view.png" width="500px">


STS with isDefaultView parameter set to 'false':
<img src="\simple-tree-structure\imgSamples\sts_view.png" width="500px">

<!-- ROADMAP 
## Roadmap

See the [open issues](https://github.com/github_username/repo_name/issues) for a list of proposed features (and known issues).
-->


<!-- CONTRIBUTING 
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

-->

<!-- LICENSE
## License

Distributed under the MIT License. See `LICENSE` for more information.
 -->


<!-- CONTACT -->
## Contact

Aleksandar Datsov - [a.datsov@gmail.com]

Project Link: [https://github.com/AleksandarDatsov/simple-tree-structure/tree/master](https://github.com/AleksandarDatsov/simple-tree-structure/tree/master)
