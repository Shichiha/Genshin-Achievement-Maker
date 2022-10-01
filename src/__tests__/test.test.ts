import { genshinAchievement } from '..';

test('My Greeter', () => {
    expect(genshinAchievement('a'.repeat(93)).catch(console.log));
});