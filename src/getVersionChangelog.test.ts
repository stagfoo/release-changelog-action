import {getVersionChangelog} from './getVersionChangelog';

describe('getVersionChangelog', () => {
  it('should return changelog for version', () => {
    expect(
      getVersionChangelog('./src/fixtures/CHANGELOG.fixture.md', 'v1.0.0')
    ).toBe(
      `## 1.0.0 - 2021-04-30
### Added
- First version`
    );
  });

  it('should throw error if version not found in changelog', () => {
    expect(() => {
      getVersionChangelog('./src/fixtures/CHANGELOG.fixture.md', 'v1.1.1');
    }).toThrowError('Version v1.1.1 not found in changelog');
  });
  it('should throw error if changelog can not be parsed', () => {
    expect(() => {
      getVersionChangelog(
        './src/fixtures/CHANGELOG_CORRUPTED.fixture.md',
        'v1.1.1'
      );
    }).toThrowError(
      `Unable to parse changelog. Parser error: Cannot read properties of undefined (reading '0')`
    );
  });
});
