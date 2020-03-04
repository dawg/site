# Troubleshooting Guide
This section contains solutions to common problems that you may encounter while using `DAWG`.

## The Piano Roll is Empty
This means that you have not opened an [Instrument](/guide/user_guide.html#instruments) in the [Piano Roll](/guide/user_guide.html#piano-roll). First, make sure that you have created and selected a pattern within the `Patterns` tab (see [Patterns](/guide/user_guide.html#patterns)). Next, right-click on the desired [Instrument](/guide/user_guide.html#instruments)) and select `Open in Piano Roll`. This will automatically move you to the `Piano Roll` tab where you will be able to start sequencing.

## My Project Won't Open
`DAWG` has a long way to go in terms of stability. This issue could have been caused by a variety of reasons that aren't easily diagnosable or fixable. If you wish to recover your project file, copy the entire error message and [submit an issue on GitHub](https://github.com/dawg/dawg/issues). Make sure to attach your project file and we will diagnose the issue and send back your fixed project file as soon as we can.

In the future, better mechanisms for reporting failures will be available. Ideally, these kinds of issues will never occur.

## What File Formats Are Supported?
Currently, we only support `WAV` files as they were the easiest to implement. We plan to add support for `mp3` files and others as soon as we get a chance. Until then, your best option is to use an online converter (such as [online-audio-converter](https://online-audio-converter.com/)) to convert your audio files into the appropriate format.

## Can I Route An Audio Sample To A Mixer Channel?
It is not currently possible to route an audio sample to a mixer channel. This feature is currently in development and will be available soon.

## Does DAWG Support VSTs?
`DAWG` does not currently support VST plugins for synthesizers or effects. We run on [JavaScript](https://en.wikipedia.org/wiki/JavaScript) (the same thing that runs in the browser) and do not use the industry standard technology (ie. [C++](https://en.wikipedia.org/wiki/C%2B%2B)).

There is currently no way to import existing `VSTs` into the workstation; however, this technology will be a big priority moving forward. See [vst-js](https://github.com/ramirezd42/vst-js) for the current state-of-the-art solution. This library will be used as a starting point for our solution.

## I Received An Unknown Error
`DAWG` is a stateful application that could very easily enter a weird state. Given that `DAWG` is still a work in progress, this is even more likely. If you receive an unexpected error, the best solution is to reload the application. Go to `DAWG` > `Reload`, use the [Command Palette](/guide/user_guide.html#command-palette) or use the keyboard shortcut (defaults to `CmdOrCmdOrCtrl+R`). If you can, make sure to save your work before exiting.

We are also in the progress of creating an error reporting mechanism that will automatically send reports to us in the event that an unexpected arises. Until then, [submit an issue on GitHub](https://github.com/dawg/dawg/issues).

## DAWG Is Lagging When I Preview A WAV File
`DAWG` is not currently optimized to handle large `WAV` files. We are aware of this problem and are working towards a solution.

## DAWG Is Lagging When I Import A MIDI File
`DAWG` is not optimized to import large MIDI files. This problem is easily fixable when a few optimization tweaks and a solution is currently in our backlog.

## DAWG Is Just Laggy
You've caught us, `DAWG` is unfortunately laggy at times. If you try hard enough, you'll find loads of inefficiencies throughout `DAWG`. In the near future, we are prioritizing major performance improvement refactoring.
