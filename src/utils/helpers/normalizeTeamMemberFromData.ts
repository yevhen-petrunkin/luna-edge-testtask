function normalizeTeamMemberFromData(data: any) {
  const { abilities, base_experience, height, id, name, sprites, weight } =
    data;

  const normalizedAbilities: string[] = abilities.map(
    (ability: any) => ability.ability.name as string
  );

  const imageUrl = sprites?.front_default;

  return {
    id,
    name,
    imageUrl,
    experience: base_experience,
    height,
    weight,
    abilities: normalizedAbilities,
  };
}

export default normalizeTeamMemberFromData;
