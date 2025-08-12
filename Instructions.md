# Instructions for Preparing the JupyterLab Environment

1. Install Python
   1. Go to the official Python website: [https://www.python.org/downloads/](https://www.python.org/downloads/)
   2. Download the appropriate version for your operating system (e.g., macOS, Windows, Linux).
   3. Open the downloaded file and follow the installation instructions.
   4. Make sure to select the option "Add Python to PATH" (on Windows).
   5. Verify the installation in the terminal with:
        ```
        python3 --version
        ```
        or
        ```
        python --version
        ```

2. Create a Python Environment
   1. Open the terminal (macOS/Linux) or the command prompt (Windows).
   2. Navigate to the folder where you want to work.
   3. Create a new virtual environment with:
        ```
        python3 -m venv venv
        ```
        or
        ```
        python -m venv venv
        ```
   4. Activate the environment:
    - macOS/Linux:
        ```
        source venv/bin/activate
        ```
    - Windows:
        ```
        .\venv\Scripts\activate
        ```
   5. Check if the environment is active (the prompt should change).

3. Install JupyterLab
   1. Make sure your virtual environment is activated.
   2. Install JupyterLab with the following command:
      ```
      pip install jupyterlab
      ```
   3. Verify the installation:
      ```
      jupyter lab --version
      ```
   4. Start JupyterLab with:
      ```
      jupyter lab
      ```
   5. A browser window will open automatically. You can now work with JupyterLab.

4. Install the Extension
   1. Make sure your virtual environment is activated.
   2. Make sure the Jupyter server is shut down.
   3. Install the extension with the following command:
      ```
      pip install TODO.whl
      ```
