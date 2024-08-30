# Microsoft Student Contributor Path Fixer

<p align="center">
  <img src="https://miro.medium.com/v2/resize:fit:1400/1*fMCdGCokXoh8CECCD7j9Og.png" alt="MLSA Logo" width="100"/>
  <img src="https://scontent.fcrk3-3.fna.fbcdn.net/v/t39.30808-6/454367889_915125600632813_8988608152099054641_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE8YsLm2dgoNpW8E5JE8rSX8Vzr7lwFIO7xXOvuXAUg7oWSG1DnAgV-KQVW3yW25R0TCCBSEd8IxYHDMwME2kfM&_nc_ohc=Orh0JlUpUOUQ7kNvgHJtdrP&_nc_ht=scontent.fcrk3-3.fna&oh=00_AYBfZB8gbJmrQW9NU0sH4I6soaT8mt2x2lAL26WC1oPICg&oe=66D71B12" alt="MSC PLM" width="100"/>
</p>

Welcome to the Microsoft Student Contributor Path Fixer! This tool helps Microsoft Student Community members correct their contributor paths for eligible Microsoft content URLs by appending their Contributor ID.

## Overview

This project is a part of the [Microsoft Student Community PLM](https://web.facebook.com/plmmsc) and provides an easy way to:

- **Fix contributor paths** by generating a new URL with the Contributor ID.
- **Handle special cases** where URLs have existing parameters or language locale codes.

## Features

- **Add Contributor ID**: Automatically appends your Contributor ID to the URL.
- **Handle Parameters**: Adjusts URLs with existing parameters.
- **Locale Removal**: Removes language locale codes if present.

## How It Works

1. **Enter Contributor ID**: Provide your Microsoft Contributor ID.
2. **Input URL**: Enter the original Microsoft content URL.
3. **Generate Link**: The tool will output a new link with your Contributor ID correctly appended.

## Example

1. **Original URL**: `https://learn.microsoft.com/`
2. **Modified URL**: `https://learn.microsoft.com/?wt.mc_id=studentamb_######`

**Special Cases:**

- **Language Locale**: Remove any `lang-locale` (e.g., `en-us/`) before appending your ID.
- **Existing Parameters**: Replace `?` with `&` if the URL already contains parameters.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request with your changes.

## Contact

For any questions or feedback, please contact [Microsoft Student Community PLM](mailto:plm.mscorg@outlook.com).

---

This project is brought to you by the Microsoft Student Community PLM.
