import LoginForm from './'

describe("Login Form - Takes the Github Token", () => {
  let wrapper
  const mockCallback = jest.fn()

  beforeEach(() => {
    wrapper = mount(<LoginForm
      sendToken={mockCallback}
      onChange={mockCallback}
      tokenValue="123"
    />)
  })

  test("It renders a submit button", () => {
    expect(wrapper.find('button').length).toEqual(1)
  })

  test("Calls the function on click", () => {
    wrapper.find('button').simulate('click')
    expect(mockCallback.mock.calls.length).toBe(1);
  })

  test("It renders an input field", () => {
    expect(wrapper.find('input').length).toEqual(1)
  })

  test("It receives the correct props", () => {
    const props = wrapper.props()
    expect(props.tokenValue).toEqual('123')
    expect(props.updateInput).toBeDefined()
    expect(props.sendToken).toBeDefined()
  })
})