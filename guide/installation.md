# Installing Vusic
<download-button
  deb="http://tiny.cc/qy9q4y"
  rpm="http://tiny.cc/sq004y"
  windows="http://tiny.cc/ur9q4y"
  macos="http://tiny.cc/p09q4y"
></download-button>

Downloading and installing `Vusic` should only take a few minutes. It is a fairly small file (compared to other DAWs) sitting at less than `100 MB`.

## Including Machine Learning Models
To utilize the vocal isolation and piano transcription models, the [repository](https://github.com/dawg/models) must first be cloned. Within Vusic, click the Settings icon and add the path to the cloned repository in the `Models Path` field.

The second step is to open a terminal in the cloned models repository and enter the following commands: 
```
$ pipenv install
$ pipenv shell
$ which python
```
Copy the ouput path and paste it in the `Python Path` field. Finally, [download](https://github.com/dawg/models/releases/download/untagged-c25236915a5c8ba4e521/Models.zip) the pre-trained models. 
::: warning
By default, the models scripts check the Desktop for the pre-trained models, placing them there will save you from manually changing any code.
:::

That's it! You're ready to use `Vusic`.

## System Requirements
`Vusic` is kinda lightweight (compared to other DAWs) and should run on most available hardware and platform versions. Since we are running `Google Chrome` under the hood, you can reference their [system requirements page](https://support.google.com/chrome/a/answer/7100626?hl=en) for accurate information. For the machine learning models, you will need [Python](https://www.python.org/).