# Troubleshooting Guide
This section contains solutions to common problems that you may encounter while using `Vusic`.

## The Piano Roll is Empty
This means that you have not opened an [Instrument](/guide/user_guide.html#instruments) in the [Piano Roll](/guide/user_guide.html#piano-roll). First, make sure that you have created and selected a pattern within the `Patterns` tab (see [Patterns](/guide/user_guide.html#patterns)). Next, right-click on the desired [Instrument](/guide/user_guide.html#instruments)) and select `Open in Piano Roll`. This will automatically move you to the `Piano Roll` tab where you will be able to start sequencing.

## I Can't Enable Cloud Backup
You will not be able to enable the [Cloud Backup](/guide/user_guide.html#cloud-backup) until you've given your project a name. In the settings popup, enter a name in the `Project Name` field and you will immediately be able to toggle the `Cloud Backup` switch.

## My Project Won't Open
`Vusic` has a long way to go in terms of stability. This issue could have been caused by a variety of reasons that aren't easily diagnosable or fixable. If you wish to recover your project file, go to `Help` > `Open Developer Tools` and go to the `Console` tab. Once you are there, copy all of the text that you see and send the copied text to `jacob.smith@unb.ca` along with the project file that you are unable to open. We will diagnose the issue and send back your fixed project file as soon as we can. 

In the future, better mechanisms for reporting failures will be available. Ideally, these kinds of issues will never occur.

## My Shortcuts Stopped Working
Sometimes, shortcuts stop working and enter a weird state. If this occurs, go to `View` > `Reload` to restart the application. Make sure to save your work first. This is a known issue that we are working to reproduce.

## What File Formats Are Supported?
Currently, we only support `WAV` files as they were the easiest to implement. We plan to add support for `mp3` files and others as soon as we get a chance. Until then, your best option is to use an online converter (such as [online-audio-converter](https://online-audio-converter.com/)) to convert your audio files into the appropriate format.

## Can I Route An Audio Sample To A Mixer Channel?
It is not currently possible to route an audio sample to a mixer channel. This feature is currently in development and will be available soon.

## How Do I Change The BPM?
It is not currently possible to alter the BPM of a project. A solution to this issue will be provided soon.

## How Do I Export A Project?
It is not currently possible to export a project into an audio file. Due to time constraints, this feature has not yet been implemented; however, it should not be long before a solution is provided.

## Can Undo/Redo Operations?
Due to time constraints, we do not support undoing and redoing operations. This feature is one of our top priorities. Ideally, `Vusic` will support unlimited undo/redo functionality and will use the standard keyboard shortcuts (ie. `Ctrl+Z`, `Ctrl+Y`, and `Ctrl+Shift+Z`).

## Can I Change The Default Theme?
`Vusic` color palette was built with customizability in mind. Although changing the theme is not currently possible, it shouldn't be too much longer until this feature is implemented.

## Does Vusic Support VSTs?
`Vusic` does not currently support VST plugins for synthesizers or effects. We run on [JavaScript](https://en.wikipedia.org/wiki/JavaScript) (the same thing that runs in the browser) and do not use the industry standard technology (ie. [C++](https://en.wikipedia.org/wiki/C%2B%2B)).

There is currently no way to import existing `VSTs` into the workstation; however, this technology will be a big priority moving forward. See [vst-js](https://github.com/ramirezd42/vst-js) for the current state-of-the-art solution. This library will be used as a starting point for our solution.

## I Received An Unknown Error
`Vusic` is a stateful application that could very easily enter a weird state. Given that `Vusic` is still a work in progress, this is even more likely. If you receive an unexpected error, the best solution is to reload the application. Go to `View` > `Reload` or use the keyboard shortcut (defaults to `Ctrl+R`). If you can, make sure to save your work before exiting.

We are also in the progress of creating an error reporting mechanism that will automatically send reports to us in the event that an unexpected arises. Until then, [submit an issue on GitHub](https://github.com/dawg/vusic/issues) or use our current error reporting system in [Feature Requests & Bug Reporting](/guide#feature-requests-&-error-reporting) if you do not have a GitHub account.

## Vusic Is Lagging When I Preview A WAV File
`Vusic` is not currently optimized to handle large `WAV` files. We are aware of this problem and are working torwards a solution.

## Vusic Is Lagging When I Import A MIDI File
`Vusic` is not optimized to import large MIDI files. This problem is easily fixble when a few optimization tweaks and a solution is currently in our backlog.
