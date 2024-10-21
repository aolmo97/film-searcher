import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { categories } from '../constants/categories';

interface SearchFormProps {
  query: string;
  category: string;
  onQueryChange: (query: string) => void;
  onCategoryChange: (category: string) => void;
  onSubmit: () => void;
}

export const SearchForm: React.FC<SearchFormProps> = ({
  query,
  category,
  onQueryChange,
  onCategoryChange,
  onSubmit,
}) => (
  <View style={styles.searchContainer}>
    <TextInput
      style={styles.searchInput}
      placeholder="Search movies"
      value={query}
      onChangeText={onQueryChange}
      onSubmitEditing={onSubmit}
    />
    <Picker
      selectedValue={category}
      style={styles.categoryPicker}
      onValueChange={onCategoryChange}
    >
      {categories.map((cat) => (
        <Picker.Item key={cat.id} label={cat.name} value={cat.id} />
      ))}
    </Picker>
  </View>
);

const styles = StyleSheet.create({
  searchContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  searchInput: {
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    fontSize: 16,
    marginBottom: 8,
  },
  categoryPicker: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: 8,
  },
});
