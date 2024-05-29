import { renderHook, act } from '@testing-library/react';
import { ThemeProvider } from './language.context';
import { useTheme } from './language.hooks';

describe('useTheme specs', () => {
  it('should return a theme equals { primaryColor: "black" } when it renders the hook and calls to onChangeDarkTheme', () => {
    // Arrange

    // Act
    const { result } = renderHook(() => useTheme(), { wrapper: ThemeProvider });

    act(() => {
      result.current.onChangeDarkTheme();
    });

    // Assert
    expect(result.current.theme).toEqual({ primaryColor: 'black' });
  });
});