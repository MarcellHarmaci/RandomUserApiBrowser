import React, { useEffect, useState } from 'react';
import { ScrollView, Image, StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-elements';

export default function PersonDetails({ route, navigation }) {
    const [user, setUser] = useState("")

    useEffect(() => {
        setUser(route.params)
    }, [])

    function imageByGender(gender) {
        switch (gender) {
            case "female":
                return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxOhXZHqIcsq2tFuzXYHPUPN1kZDxdt0z1HDFwnlHHy9kp4PLt5-ea9jnPVVG-gVbEjQ8&usqp=CAU"
            case "male":
                return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcyzREYhNedkIx5GD5nMYlx7_t8tleQIbmuK9pi08wJMCQFpjGnx9xJKalXIS0a5gybdw&usqp=CAU";
            default:
                return "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Nonbinary_Gender_Symbol.svg/400px-Nonbinary_Gender_Symbol.svg.png"
        }
    }

    return user ? (
        <View style={styles.container}>
            <ScrollView style={{ flex: 1, width: '100%' }}>
                <View style={{ alignItems: 'center' }}>

                    <Image
                        source={{ uri: user.picture.large }}
                        style={{ width: 200, height: 200, marginEnd: 8 }}
                    />
                    <Text style={styles.title}>
                        {`${user.name.title} ${user.name.first} ${user.name.last}`}
                    </Text>

                    <Text style={styles.sectionTitle}>Contact Info</Text>
                    <View style={styles.dataItem}>
                        <Text style={styles.attrName}>Email: </Text>
                        <Text style={styles.attrText}>{user.email}</Text>
                    </View>
                    <View style={styles.dataItem}>
                        <Text style={styles.attrName}>Phone: </Text>
                        <Text style={styles.attrText}>{user.phone}</Text>
                    </View>
                    <View style={styles.dataItem}>
                        <Text style={styles.attrName}>Mobile: </Text>
                        <Text style={styles.attrText}>{user.cell}</Text>
                    </View>

                    <Divider style={{ height: 2, width: '60%', backgroundColor: 'grey', marginTop: 16 }} />

                    <Text style={styles.sectionTitle}>General</Text>
                    <View style={styles.dataItem}>
                        <Text style={styles.attrName}>Gender: </Text>
                        <Image
                            source={{ uri: imageByGender(user.gender) }}
                            style={{ width: 30, height: 30 }}
                        />
                    </View>
                    <View style={styles.dataItem}>
                        <Text style={styles.attrName}>Age: </Text>
                        <Text style={styles.attrText}>{user.dob.age}</Text>
                    </View>
                    <View style={styles.dataItem}>
                        <Text style={styles.attrName}>Date of birth: </Text>
                        <Text style={styles.attrText}>{user.dob.date.slice(0, 10)}</Text>
                    </View>

                    <Divider style={{ height: 2, width: '60%', backgroundColor: 'grey', marginTop: 16 }} />

                    <Text style={styles.sectionTitle}>Location</Text>
                    <View style={styles.dataItem}>
                        <Text style={styles.attrName}>Postcode: </Text>
                        <Text style={styles.attrText}>{user.location.postcode}</Text>
                    </View>
                    <View style={styles.dataItem}>
                        <Text style={styles.attrName}>State: </Text>
                        <Text style={styles.attrText}>{user.location.state}</Text>
                    </View>
                    <View style={styles.dataItem}>
                        <Text style={styles.attrName}>City: </Text>
                        <Text style={styles.attrText}>{user.location.city}</Text>
                    </View>
                    <View style={styles.dataItem}>
                        <Text style={styles.attrName}>Street: </Text>
                        <Text style={styles.attrText}>{user.location.street.name}</Text>
                    </View>
                    <View style={styles.dataItem}>
                        <Text style={styles.attrName}>Apartment: </Text>
                        <Text style={styles.attrText}>{user.location.street.number}</Text>
                    </View>


                </View>
            </ScrollView>
        </View>
    ) : (
        <View style={styles.container}>
            <Text style={styles.title}>
                Loading...
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        paddingVertical: 8,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    title: {
        fontSize: 32,
    },
    sectionTitle: {
        fontSize: 26,
        marginTop: 8
    },
    dataItem: {
        width: '100%',
        flexDirection: 'row'
    },
    attrName: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    attrText: {
        fontSize: 16,
    }
});