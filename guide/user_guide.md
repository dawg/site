# User Guide
## Getting Started
Once you have `DAWG` installed on your machine, the next step is to open the software and familiarize yourself with the basics. To do this, find the `DAWG` launch icon and double click it. The software will take a few seconds to initialize and will display a loading animation while this occurs. After loading has been completed, you will see an empty project.

<img-modal src="https://i.ibb.co/f046PNm/Screenshot-from-2019-03-10-18-39-44.png" alt="Empty Application"></img-modal>

## Basics
### Command Palette
The `Command Palette` is a core aspect of DAWG's navigation system and is accessible using the `CmdOrCtrl+Shift+P` keyboard shortcut. Once you open the palette, use your up and down keys to navigate the available commands. This feature aims to list all commands that are currently available to you given your current context.

<img-modal src="https://i.ibb.co/5vg3gDy/Capture.png" alt="Command Palette"></img-modal>

### Keyboard Shortcuts
DAWG features a wide variety of keyboard shortcuts to help you quickly access features without moving your mouse. The easiest way to view these shortcuts at the moment is by accessing the [Command Palette](#command-palette) using the `CmdOrCtrl+Shift+P` shortcut. After the palette comes up, you will see a full list of the available shortcuts that you currently have access to. If available, the shortcuts will be located on the right-hand side of the command.

In the future, this list of shortcuts will continue to grow as features are added and the shortcut technology is enhanced. `DAWG` aims to provide an extensibility mechanism that allows anyone to modify the default shortcuts to suit their needs and preferences.

### Layout
- **Toolbar** - The toolbar is located at the top of the screen and contains project settings, the current playback time, and the play/pause buttons.
- **Activity Bar** - The activity bar is located in the far left-hand side of the application and contains tab icons. Clicking icons changes the view in the **Side Bar**.
- **Side Bar** - Contains different views that are selected by the **Activity Bar**.
- **Panels** - Contains different panels that can be changed using the panel headers.
- **Status Bar** - The status bar contains relevant information such as the currently opened project and the [Cloud Backup](#cloud-backup) status.
- **Menu bar** - Contains all the sub menus. Also contains the window controls.

<img-modal src="https://i.ibb.co/6wYKD5b/Status-Bar.png" alt="Marked Up Layout" no-shadow></img-modal>

### Workspace Configuration
`DAWG` saves configuration information that is related to your project (although not apart of the project) in your workspace configuration. For example, when the application is closes, the opened tabs are serialized the the file system so that when you open up a project the exact same tabs are opened. This all happens behind the scenes but it is important to understand that each project will have its own "workspace" configuration.

### Global Configuration
`DAWG` also stores "global" configuration information which, unlike "workspace" configuration, affects *all* projects. For example, the folders you have opened in your [File Explorer](#file-explorer) are synced across all projects. As stated above, this all happens behind the scenes :)

### Project Settings
Project settings are located in two locations, the toolbar and from a popup located in the [Activity Bar](#layout). Click the settings icon in the [Activity Bar](#layout) to activate the popup. In the toolbar, you will be able to change the [BPM](https://en.wikipedia.org/wiki/BPM_(Beats_per_Minute)) and eventually the time signature. In the settings, you will find the full list of configurable parameters (e.g. the project name, whether to backup your project). This information can be stored in one of three location: the actual [Project File](#project-files), the [Global Configuration](#global-configuration) or the [Workspace Configuration](#workspace-configuration).

### Contexts
When you press the play button, you could either play the contents of the [Playlist](#playlist) or the currently selected [Pattern](#patterns). The context, defined as either `Playlist` or `Pattern`, specifies which item you actually wish to play. To change this, use the two rectangles on the far right-hand side of the [Toolbar](#layout). If you find yourself switching contexts fairly often, make sure to use the [Keyboard Shortcut](#keyboard-shortcuts).

## Themes
`DAWG` comes with several builtin themes. To change your theme, open up the [Command Palette](#command-palette) and select `Change Theme`. As you move with your arrow keys, the themes will preview within the DAW. At the moment, it is not possible to define custom themes.

## History
`DAWG` keeps a detailed history of all your actions which you can view by navigating to the `History` tab in the [Activity Bar](#activity-bar). From there, you can see your history and seek a particular point in time. Furthermore, you can use the common `CtrlOrCmd+Z` and `CtrlOrCmd+Shift+Z` to undo and redo respectively.

## Project Files
`DAWG` saves the project file to the file system with a `.dg` extension. This enables us to correctly identify project files; however, they are really just `JSON` files in disguise. If you know what you're doing, feel free to open up and modify them in a text editor. Beware of modifying the file's contents though as it will not open correctly if not properly formatted.

### Saving the Project
To save a project, navigate to `File` > `Save`. This will open up your operating systems file dialog where you will be able to specify a location to save the current project file. When naming the file, if a `.dg` extension is not provided, it is automatically appended before saving. After choosing the path, the project will be automatically saved to that path every time you press `Save`. To force the application to save to a new file location, use the `File` > `Save As` command.

### Opening a Project
Similar to the restrictions on saving a file, we will only let you open up a folder that has a `.dg` extension. Navigate to `File` > `Open` to open up the file dialog. After choosing a new file, `DAWG` will reload and open your new project.

### Exporting a Project
Navigate to `File` > `Export` to start the export process. Note that due to current limitations, we have to export the project in real-time (ie. if your song is 1 minute long it will take 1 minute to export).

## Audio Files
Audio files can be imported into the project using the [Workspace Folders](#workspace-folders). Currently, the only way to import audio files into the project is by dragging audio files from the opened folders into the [Playlist](#playlists). Every time you drag in a new file, `DAWG` checks to see if you've already imported the audio file and adds it to the project if you haven't. These audio files are displayed in the `Audio Files` tab within the [Activity Bar](#layout). The audio files listed in the `Audio Files` tab can also be dragged into the [Playlist](#playlists). To remove an audio file from your project, right-click and select `Delete` from the dropdown.

Audio files are uniquely identified by their path. This means that changing the location of audio files will cause errors in your project. Consequently, moving a project from one computer to another is not very well supported. Better methods to uniquely identify audio files are being researched and will be implemented as soon as possible. When implemented, projects will be able to recover missing audio files using these unique identifiers.

## Patterns
`Patterns` store sequence information that can be started/stopped as a single unit and scheduled in the [Playlist](#playlists) at one or more locations. Each `Pattern` contains score information for each [Instrument](#instruments). To create a pattern, select the `Patterns` tab within the [Activity Bar](#layout) and click the `Add Pattern` button. This will create a new `Pattern` with a unique name and add it to the `Pattern` list. By default, the first `Pattern` that you create will be selected. Once you create another `Pattern`, simply click on the `Pattern` you wish to select. By selecting a `Pattern`, you change which is previewed when you press play and which scores are displayed in the [Piano Roll](#piano-roll).

<img-modal src="https://i.ibb.co/CMMNqTH/Screenshot-from-2sadf019-03-10-20-46-34.jpg" alt="Pattern"></img-modal>
> Two instruments that each contain a score that was created using the `Piano Roll`. Both of these scores are stored within a `Pattern`.

## Piano Roll
The `Piano Roll` allows you to sequence notes (aka a score) for a specific [Instrument](#instruments). Each score is associated with exactly one [Instrument](#instruments) and belongs to exactly one `Pattern`. To start a score, make sure you have a `Pattern` selected, then right-click an `Instrument` and click `Open in Piano Roll`. To return to a score, just use the same commands as above. See the [Sequencer](#sequencer) section to learn how to sequence notes.

<img-modal src="https://i.ibb.co/bQD3Rph/Screenshot-from-2019-03-10-21-01-39.png" alt="Piano Roll"></img-modal>
> A `Piano Roll` with a basic sequence of notes.

::: tip Info
**Score** is a generic term that is commonly used for sheet music. Although the `Piano Roll` does not actually create sheet music, we have adopted the term to suit our needs. [See here](https://en.wikipedia.org/wiki/Sheet_music) for more information about the relationship between sheet music and scores.
:::

## Sequencer
Sequencing, also know as scheduling events to occur at a particular time, is an essential aspect of music production. For example, you may want to sequence a melody, a chord progression, or a set of audio samples. The `Sequencer` component, used by both the [Playlist](#playlist) and [Piano Roll](#piano-roll), manages all sequencing that occurs within `DAWG`. Although the types of elements that each `Sequencer` is able to sequence may differ, the available tools at your disposal remain almost identical.

The layout should feel intuitive if you've ever used a DAW before. Depending on the type of `Sequencer`, each row represents something different (ex. each row in the [Piano Roll](#piano-roll) represents a different note); however, every column represents a location in time, regardless of the exact implementation. Each column, divided by least thick line, represents `1/4th` of a beat. The medium line thickness represents the start/end of a beat and the thickest line represents the start/end of a bar/measure. 

### Scheduling Elements
To add an element, just click anywhere within the `Sequencer`. Depending on the type of `Sequencer`, this may or may not work. For example, with a [Piano Roll](#piano-roll), the only type of element is a note. Therefore, when you click within a `Piano Roll`, a note will always appear. In contrast, in `Sequencers` such as the [Playlist](#playlist), no default is provided. For such systems, you must add an element first before another can be created by clicking. Refer to the specific `Sequencer` information section for more information about adding the initial item.

### Removing Elements
To delete a scheduled element, right-click on the element you wish to remove. It is also possible to remove more than one element at once using [Selection Tool](#selection-tool).

### Copying an Element
To copy an element, just click on it. Afterward, anytime you click within the `Sequencer` a copy will appear. Another way to copy an element is by holding `Shift`, pressing down on the element you wish to copy, and dragging to the desired location.

### Changing Element Duration
To change the length of an element, hover your mouse ever the right-hand side of an element until you see the two-sided horizontal arrow. Press down on your mouse and drag horizontally until the desired length is obtained.

### Selection Tool
Sequencing elements can easily become tedious. To avoid this problem, moving, copying, and changing the duration of an element can all be batched by first selecting a group of elements and then applying the desired operation to a single element. For example, if you want to move all of the notes in the `Piano Roll` to a new octave, you could select all of the notes using the selection tool and then drag one of the notes to the desired octave. Since all of the notes are selected, they will all move in unison. To select a group of elements, press down within the `Sequencer` (not on an element) and drag your mouse such that the desired elements are selected. Furthermore, it is possible to delete selected elements using the `Del` key.

::: tip press down
To use the selection tool, select the hand that is "pointing" in the top-left corner of the sequencer.
:::

### Slicing
Slicing is a tool that allows you to quickly cut a [Sample](#sample), [Pattern](#patterns) or [Automation Clip](#automation-clips) in two. Slicing will occur if and only if the line overlaps with at least 50% of the vertical portion of an element and will occur at the middle point between the intersection of the line with the top and bottom of the element. This may sound a bit confusing but it should be pretty intuitive once you start using it!

::: tip Tip
To use the slicer tool, select the hand that is making the "scissors" symbol in the top-left corner of the sequencer.
:::

### Grid Snapping
Grid snapping helps you while scheduling elements in the [Playlist](#playlist) and [Piano Roll](#piano-roll). In the sequencer, the number next to the upside down horseshoe magnet indicates the current snap value (measured in steps). By default, this value is set to `1` but is easily changed by clicking on the the magnet. To remove snapping completely, hold down on the `Alt` (Windows/Linux) or `⌥` (Mac) performing operations in the sequencer. For example, this value is used while changing the start time of an element or its duration.

### Seeking a Position
To seek a particular time in the `Sequencer`, click a position on the timeline. The timeline cursor will automatically seek that position, even if it is currently in its playback state and will restart playback from the chosen position.

<img-modal src="https://i.ibb.co/4ppkm7X/Screenshot-from-2019-03-11-15-53-52.png" alt="Timeline"></img-modal>
> A view of the first 9 timeline bars. The timeline cursor is currently at time `0` (the start of beat `1`).

### Previewing & Looping
To preview your creation, make sure you are in the correct [context](#contexts) and press play. This will play all of the elements in your sequence before starting over at the beginning. If you wish to loop a section of the sequence, right-click on the timeline and start to drag your mouse. The loop start and end can be altered by pressing down on the end you wish to change and dragging to the desired position. To remove the loop, simply right-click anywhere within the timeline.

<img-modal src="https://i.ibb.co/Y2SLM50/looping.png" alt="Looping"></img-modal>
> An image of the [Piano Roll](#piano-roll) with a loop set between the `3rd` and `7th` bars.

## Resizing
It is possible to adjust the height and width of the `Sequencer`. To adjust the width, hover over the [Timeline](#timeline), hold `Ctrl` and scroll with your mouse wheel. To adjust the height of the `Sequencer`, hover your mouse over the piano or track list (depending on whether you are using the [Piano Roll](#piano-roll) or [Playlist](#playlist)), hold `Ctrl` and scroll with your mouse wheel. Right now, it is not possible to use a trackpad to adjust these settings; however, that feature is in the backlog.

## Mixer
The mixer allows you to add different [Effects](#effects) to instruments. Currently, there are ten different channels available to be used. Each channel takes in a number of inputs and produces the same number of outputs. Each channel can have up to ten [Effects](#effects) which are applied in the order they appear in the channel (top to bottom). Volume, panning, and muting controls are also available at the bottom of the channel.

<img-modal src="https://i.ibb.co/sjqZfns/Screenshot-from-2019-03-11-17-56-45.png" alt="Mixer"></img-modal>
> `Channel 0` has one effect in the third slot. The settings are being displayed on the right-hand side.

To route an [Instrument](#instruments) to a specific channel, go to the `Instruments` panel and select the desired channel of the far-right side of the [Instrument](#instruments).

<img-modal src="https://i.ibb.co/5LHZKmk/instrument-with-channel.png" alt="Instrument routed to channel"></img-modal>
> An [Instrument](#instruments) routed to channel `0`.

## Effects
`Effects` are software or hardware elements that manipulate an audio signal in some way. See [here](https://blog.landr.com/audio-effects-plugins-guide/) for a more detailed overview and some examples. Effects are inserted into channels within the [Mixer](#mixer) and manipulate the instruments that are routed to that particular channel. DAWG currently features the following effects:

- Wah
- Reverb
- Phaser
- Bit Crusher
- Ping Pong Delay
- Compressor
- EQ3
- Limiter
- Chorus
- Tremolo
- Distortion

## Instruments
Instruments are used as a starting point for different sounds. To create a new instrument, navigate to the `Instruments` panel and click the `Add Instrument` button. This will find a unique name and append a new synthesizer to the instrument list. Using the controls, you can mute the instrument, adjust its gain and panning values, and assign the instrument to a channel (see [Mixer](#mixer)). To change the oscillator, double-click anywhere on the instrument. This will expand the area and display a dropdown where you will be able to select a new oscillator type. Double-click again to close the expanded area.

Currently, we only support our integrated synthesizers and do support other sources such as SoundFonts and VSTs (see [here](/guide/troubleshooting.html#does-DAWG-support-vsts) for more information).

## Playlist
`Playlists` are a core feature of DAWG's audio system. Similar to FL Studio, the playlist represents the overall composition and may contain [Automation Clips](#automation-clips), [Audio Files](#audio-files), and [Patterns](#patterns). To learn more about sequencing elements in the `Playlist`, visit the [Sequencer](#sequencer) section.

### Adding Elements
[Audio Files](#audio-files) and [Patterns](#patterns) are added to the `Playlist` through a drag-and-drop mechanism. Open up either of the `Audio Files` or `Patterns` tabs and drag the [Audio File](#audio-files) or [Pattern](#patterns) the desired location within the `Playlist`. See the [Automation Clip](#automation-clips) section to learn how to add [Automation Clips](#automation-clips) to the `Playlist`.

## File Explorer
Adding folders to a workspace is an essential step during the setup process. This will enable you to import and use `WAV` files within the project. If you haven't added any folders yet, you will immediately see the `Open Folder` button when you open the project. Since you can add more than one folder to your workspace, navigate to `File` > `Add Folder to Workspace` to add more folders. These folders will be persisted across projects as they are common to a computer rather than a project.

## Automation Clips
Automation clips allow you to automate parameters found within DAWG's interface. When `VST` support is added (see [here](/guide/troubleshooting.html#does-DAWG-support-vsts)), you will also be able to automate any parameter found within third-party synthesizers or effects. To automate a value, right click on the item you would like to automate and select `Create Automation Clip`. DAWG will find the first available track in the [Playlist](#playlist) and create a new `Automation Clip`. If the loop start and end bounds are set within the `Sequencer`, the `Automation Clip` will respect those bounds when created.

<img-modal src="https://i.ibb.co/xzWmjp0/automation.png" alt="Automation Clip"></img-modal>
> An automation clip for the instrument volume.

### Modifying Values
A newly created `Automation Clip` will have two values by default, one at the start and one at the end. Click and drag on points to change their value or location To add a new point, simply click anywhere within the element. Once created, these points can be dragged like any other. Right-click on any point and select `Delete` to remove the point.

### Limitations
Currently, it is only possible to automate [Instrument](#instruments) and [Mixer](#mixer) parameters. Support for effect automation is in progress.

## Cloud Backup
Cloud integration is one of the features that sets DAWG apart from other workstations. Currently, only basic cloud backup is supported; however, we have big plans for the future.

### Backing Up Your Project
To initiate the backup mechanism, open up the settings popup and toggle `Cloud Backup`. If this setting is disabled, make sure that the `Project Name` field is not empty. Once this is activated, anytime you save the project, a copy will be pushed to a cloud database. We currently use Google's `Firebase` for fast, reliable, and secure storage. Beware, there is currently no authentication system so your project file will be visible to everyone if synced to the cloud.

Once activated, you will see the status of the backup in the [Status Bar](#layout).

### Restoring Your Project
To restore a project that is stored in the cloud, to go `File` > `Open From Backup`. A modal will appear that will list all of the available projects.

<img-modal src="https://i.ibb.co/3d0rNMF/backups.png" alt="Projects Modal"></img-modal>

Simply choose the project you wish to restore and DAWG will handle the rest.

::: warning
Make sure to save your project before opening a project from the cloud.
:::

## Machine Learning Models
`DAWG` is taking full advantage of recent advances in machine learning technology by embedding Vocal Separation and Automatic Piano Transcription models. The Vocal Separation model separates vocals from a complete song into a distinct track. The Automatic Piano Transcription model transcribes a piano track to a MIDI file. Both models output their resulting files to the project resources.

### Vocal Separation
To separate the vocals from a full track, simply double click a song in the File Explorer to open it in the `Sample Tab` and click `Separate`. This component is only compatible with `.wav` file formats.

### Automatic Piano Transcription
To transcribe a piano track to midi, simply double click a song in the File Explorer to open it in the `Sample Tab` and click `Transcribe`. This component is only compatible with `.wav` file formats and is limited to piano tracks.

<img-modal src = "https://i.ibb.co/px25rmb/Sample-Tab.png" alt = "Sample Tab"></img-modal>