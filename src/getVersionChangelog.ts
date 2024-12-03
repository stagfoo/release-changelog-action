import fs from 'fs';
import {parser} from 'keep-a-changelog';

export function getVersionChangelog(
  changelogPath: string,
  version: string
): string {
  try {
    const changelog = parser(fs.readFileSync(changelogPath, 'utf8'));
    const release = changelog.findRelease(version);
    if (!release) {
      throw new Error(`Version ${version} not found in changelog`);
    }
    return release.toString();
  } catch (err) {
    if (err instanceof Error) {
      throw Error(`Unable to parse changelog. Parser error: ${err.message}`);
    } else {
      throw Error('Unable to parse changelog.');
    }
  }
}
