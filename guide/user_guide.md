# User Guide
## Getting Started
Once you have Vusic installed on your machine, the next step is to open and save your first project. To do this, find the Vusic launch icon and double click it. The software will take a few seconds to initialize and will display a loading animation while this occurs. After loading has been completed, you will see an empty project.

![Empty Application](https://i.ibb.co/f046PNm/Screenshot-from-2019-03-10-18-39-44.png)

## Saving the Project
Vusic saves the project file to the file system with a `.dg` extension. This enables us to correctly identify project files; however, they are really just `JSON` files in disguise. If you know what you're doing, feel free to open up and modify them in a text editor. Beware of modifying the file's contents though as it will not open correctly if not properly formatted.

To save a project, navigate to `File` > `Save`. This will open up your operating systems file dialog where you will be able to specify a location to save the current project file. When naming the file, if a `.dg` extension is not provided, it is automatically appended before saving. After choosing the path, every time you press `Save` the project will be automatically saved. To force the application to save to a new file location, use the `File` > `Save As` command.

## Opening a Folder
Similar to the restrictions on saving a file, we will only let you open up a folder that has a `.dg` extension. Navigate to `File` > `Open` to open up the file dialog. After choosing a new file, Vusic will reload and open your new project.

## Command Palette
The command palette is a core aspect of Vusic's navigation system. This feature aims to list all actions that are currently available to the you. By doing so, ...... to reduce interaction with the mouse by completely removing the need to re

## Keyboard Shortcuts
Vusic features a wide variety of keyboard shortcuts to help you quickly access features without moving your mouse. The easiest way to view these shortcuts at the moment is by accessing the `Command Palette` using the `Ctrl+Shift+P` shortcut. After the palette comes up, you will see a full list of the available shortcuts that you currently have access to. If available, the shortcuts will located on the right-hand side of the action item.

In the future, this list of shortcuts will continue to grow as features are added and the shortcut technology is enhanced. Vusic aims to provide an extensibility mechanism that allows anyone to modify the default shortcuts to suit their needs and preferences.

## Undo/Redo
Due to time constraints, we do not support undoing and redoing operations. This feature is one of our top priorities. Ideally, vusic will support unlimited undo/redo functionality and will use common keyboard shortcuts (ie. `Ctrl+Z`, `Ctrl+Y`, and `Ctrl+Shift+Z`).

## Project Folders
Adding folders to a workspace is an essential step during the setup process. This will enable you to import and use `WAV` files within the project. If you haven't added any folders yet, you will immediately see the `Open Folder` when you open the project. Since you can add more than one folder to your workspace, navigate to `File` > `Add Folder to Workspace` to add more folders. These folders will be persisted across projects as they are common to a computer rather than a project.

Currently, we only support `WAV` files as they were the easiest to implement. We plan to add support for `mp3` files and others as soon as we get a chance. Until then, your best option is to use an online converter to convert your audio files into the appropriate format.

## Patterns
`Patterns` store sequence information that can started/stopped as a single unit and scheduled in the `Playlist` at one or more locations. Each `Pattern` contains score information for each `Instrument`. To create a pattern, select the `Patterns` tab within the `Activity Bar` and click the `Add Pattern` button. This will create a new `Pattern` with a unique name and add it to the `Pattern` list. By default, the first `Pattern` that you create will be selected. Once you create another `Pattern`, simply click on the `Pattern` you wish to select. By selecting a `Pattern`, you change which is previewed when you press play and which scores are displayed in the `Piano Roll`.

![Pattern](https://i.ibb.co/CMMNqTH/Screenshot-from-2sadf019-03-10-20-46-34.jpg)
> Two instruments that each contain a score that was created using the `Piano Roll`. Both of these scores are stored within a `Pattern`.

## Piano Roll
The `Piano Roll` allows you to sequence a notes (aka a score) for a specific `Instrument`. Each score is associated with exactly one `Instrument` and belongs to exactly one `Pattern`. To start a score, make sure you have a `Pattern` selected, then right-click an `Instrument` and click `Open in Piano Roll`. If you open up another score in the `Piano Roll`, just use the same instructions to open the score back up.

### Scheduling Notes
Now that you've opened an instrument in the `Piano Roll`, you can create a score. To add a note, just click anywhere in the sequencer. The layout should be intuitive if you've ever used  a DAW before. Each row represents a note and each column represents a location in time. Each column, divided by least thick line, represents `1/4th` of a beat. The medium line thickness represents the start/end of a beat and the thickest line represents the start/end of a bar. 

### Changing Length of Notes
To change the length of a note, hover your mouse ever the right-hand side of a note until you see the arrow with two heads. Press down on you mouse and drag horizontally until the desired length is obtained.

### Grid Snapping
Currently, notes are snapped to the grid at every `1/4` beat. This means that when you try and schedule a note or when you change the duration of a note, you can only do so in `1/4` beat increments. An adjustable snapping mechanism is currently in the development process and should be available soon.

### Previewing & Looping
To preview your creation, make sure you are in the `Piano Roll` [context](#contexts) and press play. This will play all of the elements in your sequence before starting over at the beginning.

![Piano Roll](https://i.ibb.co/bQD3Rph/Screenshot-from-2019-03-10-21-01-39.png)

> Scores is a generic term that is commonly used for sheet music. Although the `Piano Roll` does not create sheet music, we have adapted the term to suit our needs. [See here](https://en.wikipedia.org/wiki/Sheet_music) for more information about the relationship between sheet music and scores.

## Contexts
When you press the play button, you could either play the contents of the `Playlist` or the currently selected `Pattern`. The context, either `Playlist` or `Pattern`, specifies which item you actually wish to play. To change this, use the two rectangles on the far right-hand side of the toolbar. If you find yourself switching contexts fairly often, make sure to use the keyboard shortcut.

## Playlist
`Playlist` are a core feature of Vusic's audio system. Similar to FL Studio, a playlist is 


## TODO
- Create common section to show to to work with the sequencer.