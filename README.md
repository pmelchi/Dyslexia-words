# This is the initial point for you to run this application

## Configure your environment
### Install python
Nothin special here, just download and install the latest python if it's not already installed in your system. 

To verify the installation, run the following command. 

```
python --version
```

The output should be a version above 3.11.x
```
Python 3.11.5
```

## Create an environment
Python needs an environment, so that it doesn't setup new libraries globally. This allows for easier change across application that require different libraries and if you mess up your environment, you can always start over with a new environment (instead of a fresh installation of python).

```
python -m venv textgranderenv
source textgraderenv/bin/activate
```

On windows use the following command instead:
```
textgraderenv/Scripts/activate.bat
```

This should change your prompt to something like this:

```
(textgraderenv) $
```

## Install dependencies
The following are the current dependencies for this application. 

```
pip install Flask
```