import Header from './'

describe('Header section', () => {
  test('Snapshot test for Header', () => {
    const tree = renderer.create(<Header title="Issues Management System" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})