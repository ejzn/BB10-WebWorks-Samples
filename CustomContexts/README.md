# Custom Context Sample

Custom Contexts are a special attribute that WebWorks developers can add to HTML elements and provide custom context menu items to be shown when a context menu is enabled.


## How to add it to your page
1. On any HTML element add the data-webworks-context attribute. This attribute accepts a JSON string formatted as follows:
 - type : The type of the custom context
 - id : The id to be returned through the executed context menu item. This gives the developer the ability to know what element was triggered
 - header : The main header the developer wishes to be displayed when the context menu is in full visible mode.
 - subheader : The subheader to be deisplayed on full visible of the context menu.

2. Define the context through the blackberry.ui.contextmenu namespace. You can see the documentation here: https://developer.blackberry.com/html5/apis/blackberry.ui.contextmenu.html#.defineCustomContext

3. Add context menu items to the defined custom context as seen here: https://developer.blackberry.com/html5/apis/blackberry.ui.contextmenu.html#.addItem



The sample code for this application is Open Source under the [Apache 2.0 License](http://www.apache.org/licenses/LICENSE-2.0.html).

**To contribute code to this repository you must be [signed up as an official contributor](http://blackberry.github.com/howToContribute.html).**

Written by Erik Johnson as a sample to demostrate how to perform custom contexts using the JSON object syntax and the data-webworks-context attribute.

## WebWorks App Setup
1. Open index.html
2. ***see How To Build*** for instructions

## How to Build

1. Clone the repo to your local machine
2. Use Using the Ripple Mobile Emulator and either the BlackBerry WebWorks SDK for Smartphone or the BlackBerry WebWorks SDK for Tablet OS, package the contents of your local BB10-WebWorks-Samples/Maps folder into a BlackBerry application.

## More Info

* [BlackBerry HTML5 WebWorks](https://bdsc.webapps.blackberry.com/html5/) - Downloads, Getting Started guides, samples, code signing keys.
* [BlackBerry WebWorks Development Guides](https://bdsc.webapps.blackberry.com/html5/documentation)
* [BlackBerry WebWorks Community Forums](http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/bd-p/browser_dev)
* [BlackBerry Open Source WebWorks Contributions Forums](http://supportforums.blackberry.com/t5/BlackBerry-WebWorks/bd-p/ww_con)


## Contributing Changes

Please see the [README](https://github.com/blackberry/BB10-WebWorks-Samples) of the BB10-WebWorks-Samples repository for instructions on how to add new Samples or make modifications to existing Samples.


## Bug Reporting and Feature Requests

If you find a bug in a Sample, or have an enhancement request, simply file an [Issue](https://github.com/blackberry/BB10-WebWorks-Samples/issues) for the Sample and send a message (via github messages) to the Sample Author(s) to let them know that you have filed an [Issue](https://github.com/blackberry/BB10-WebWorks-Samples/issues).

## Disclaimer

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

